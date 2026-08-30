/**
 * Format a rupee amount for display, e.g. 1250.5 -> "₹1,250.50".
 * Uses the Indian digit-grouping convention (₹1,00,000).
 */
export function formatPrice(amount: number): string {
  return `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}
