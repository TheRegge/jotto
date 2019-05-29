/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrappper - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrappper, val) => {
    return wrappper.find(`[data-test="${val}"]`)
}