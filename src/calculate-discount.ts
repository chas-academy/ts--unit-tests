type Membership = "standard" | "silver" | "gold";

const membershipDiscountRate: Record<Membership, number> = {
  standard: 0,
  silver: 0.05,
  gold: 0.1,
};

export function calculateDiscount(
  totalAmount: number,
  membership: Membership = "standard",
  couponValue = 0
) {
  if (!totalAmount) {
    return 0;
  }
  const membershipDiscount = totalAmount * membershipDiscountRate[membership];
  const discountedTotal = totalAmount - membershipDiscount - couponValue;

  if (discountedTotal <= 0) {
    return 0;
  }

  return Math.round(discountedTotal * 100) / 100;
}
