"use client";
import React, { Component } from "react";

export default class DomErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		const isDomMismatch =
			error?.name === "NotFoundError" ||
			error?.message?.includes("removeChild") ||
			error?.message?.includes("not a child of this node");

		if (isDomMismatch) {
			return { hasError: false };
		}
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		const isDomMismatch =
			error?.name === "NotFoundError" ||
			error?.message?.includes("removeChild") ||
			error?.message?.includes("not a child of this node");

		if (isDomMismatch) {
			console.warn("Gracefully recovered from transient DOM reconciliation mismatch:", error?.message);
			return;
		}
		console.error("Unhandled runtime error:", error, errorInfo);
	}

	render() {
		return this.props.children;
	}
}
