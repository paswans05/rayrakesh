import { NextResponse } from "next/server";

/**
 * Rakesh Ray Community Marathon — Registration API Endpoint
 * -------------------------------------------------------------
 * This server endpoint validates incoming participant registration data,
 * checks for duplicate submissions, and issues an official reference ID.
 *
 * BACKEND & DATABASE INTEGRATION POINT:
 * In a production deployment with a persistent database (e.g., PostgreSQL,
 * MongoDB, Prisma, or Supabase), replace the simulated storage block below
 * with your database insert query:
 *   await db.marathonRegistrations.create({ data: newRegistration });
 *
 * NOTE ON PAYMENTS:
 * As per policy, no card or payment processor credentials are processed
 * here until a certified merchant provider (e.g. eSewa, Khalti, or Stripe)
 * and secure webhook flow are formally configured.
 */

// In-memory registration cache to guard against duplicate submissions during runtime
const registrationsStore = new Map();

export async function POST(request) {
	try {
		const body = await request.json();

		const {
			fullName,
			email,
			phone,
			age,
			gender,
			category,
			emergencyContact,
			registrationType,
			tshirtSize,
			agreeTerms,
		} = body || {};

		// Validation checks
		if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
			return NextResponse.json(
				{ success: false, error: "Please provide a valid full name (minimum 2 characters)." },
				{ status: 400 }
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email || !emailRegex.test(email.trim())) {
			return NextResponse.json(
				{ success: false, error: "Please provide a valid email address." },
				{ status: 400 }
			);
		}

		if (!phone || typeof phone !== "string" || phone.trim().length < 7) {
			return NextResponse.json(
				{ success: false, error: "Please provide a valid phone number with country code." },
				{ status: 400 }
			);
		}

		const parsedAge = parseInt(age, 10);
		if (isNaN(parsedAge) || parsedAge < 5 || parsedAge > 100) {
			return NextResponse.json(
				{ success: false, error: "Please enter a valid age between 5 and 100." },
				{ status: 400 }
			);
		}

		const validCategories = ["3km", "5km", "10km"];
		if (!category || !validCategories.includes(category)) {
			return NextResponse.json(
				{ success: false, error: "Please select a valid marathon category (3 KM, 5 KM, or 10 KM)." },
				{ status: 400 }
			);
		}

		if (!emergencyContact || emergencyContact.trim().length < 3) {
			return NextResponse.json(
				{ success: false, error: "Please provide an emergency contact name and phone number." },
				{ status: 400 }
			);
		}

		if (!agreeTerms) {
			return NextResponse.json(
				{ success: false, error: "You must agree to the event participation terms and guidelines." },
				{ status: 400 }
			);
		}

		// Duplicate submission protection (by email + category)
		const duplicateKey = `${email.trim().toLowerCase()}_${category}`;
		if (registrationsStore.has(duplicateKey)) {
			const existing = registrationsStore.get(duplicateKey);
			return NextResponse.json(
				{
					success: false,
					error: `A registration for ${email.trim()} in the ${category.toUpperCase()} category already exists. Reference ID: ${existing.referenceId}.`,
					referenceId: existing.referenceId,
					isDuplicate: true,
				},
				{ status: 409 }
			);
		}

		// Generate official reference receipt number: RRM-2026-XXXXX
		const randomSuffix = Math.floor(10000 + Math.random() * 90000);
		const referenceId = `RRM-2026-${randomSuffix}`;

		const registrationRecord = {
			referenceId,
			fullName: fullName.trim(),
			email: email.trim().toLowerCase(),
			phone: phone.trim(),
			age: parsedAge,
			gender: gender || "not_specified",
			category,
			emergencyContact: emergencyContact.trim(),
			registrationType: registrationType || "free",
			tshirtSize: tshirtSize || "M",
			registeredAt: new Date().toISOString(),
			status: "confirmed",
		};

		// Store in memory registry
		registrationsStore.set(duplicateKey, registrationRecord);

		console.log(`[Marathon Registration Confirmed] Reference: ${referenceId} | Name: ${fullName} | Category: ${category}`);

		return NextResponse.json(
			{
				success: true,
				message: "Registration successfully recorded.",
				data: {
					referenceId,
					fullName: registrationRecord.fullName,
					category: registrationRecord.category,
					registrationType: registrationRecord.registrationType,
					registeredAt: registrationRecord.registeredAt,
				},
			},
			{ status: 201 }
		);
	} catch (error) {
		console.error("Marathon registration API error:", error);
		return NextResponse.json(
			{ success: false, error: "An unexpected error occurred while processing registration. Please try again." },
			{ status: 500 }
		);
	}
}

export async function GET() {
	return NextResponse.json({
		status: "active",
		event: "Rakesh Ray Community Marathon 2026",
		location: "Parsa, Sarlahi District, Nepal",
		totalConfirmed: registrationsStore.size,
	});
}
