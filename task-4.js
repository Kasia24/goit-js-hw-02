function getShippingCost(country) {
  console.log(`Shipping to ${country} will cost ${prices} credits`);
  switch (country) {
    case "China":
      const prices = 100;
    case "Chile":
      const prices = 250;
    case "Australia":
      const prices = 170;
    case "Jamaica":
      const prices = 120;
    default:
      return "Sorry, there is no delivery to your country";
  }
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
