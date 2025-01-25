export function stripAndConvertToTitleCase(route: string): string {
  /**
   * This function takes a string route, removes the leading and trailing slashes,
   * and converts it to title case.
   *
   * @param route The route string to be converted.
   * @returns The converted string in title case.
   */

  // Remove leading and trailing slashes
  const strippedRoute = route.replace(/^\/|\/$/g, "");

  // Convert to title case
  const titleCaseRoute = strippedRoute
    .replace(/-/g, " ")
    .replace(
      /\w\S*/g,
      (word) => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase(),
    );

  return titleCaseRoute;
}
