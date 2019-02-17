export const coloredRating = {
  value: 0,
  desc: [],
  type: "rating",
  label: "Rating",
  cssFor: {
    className: "colored-rating",
    emptySymbol: "far fa-star",
    fullSymbol: [1, 2, 3, 4, 5].map(
      id => `fas fa-star rating-step-${id}`
    )
  }
};
