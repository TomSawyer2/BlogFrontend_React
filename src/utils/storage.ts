/**
 * @author TomSawyer2
 * @date 2021/9/26
 *
 * @brief
 * 1. 存入token
 * 2. 取得token
 * 3. 删除token
 * 4. 存入文章ID
 * 5. 取得文章ID
 * 6. 删除文章ID
 * 7. 本地存储文章
 * 8. 本地取得文章
 * 9. 本地删除文章
 */

/**
 * @description 存入token
 * @param {String} content
 */
 export function setToken(content: string) {
    if (!localStorage) {
        throw new Error('您的浏览器不支持localStorage,请尝试更新浏览器');
    }
    localStorage.setItem('token', content);
}

/**
 * @description 取得token
 * @returns {String} token
 */
export function getToken() {
    if (!localStorage) {
        return '';
    }
    const token = localStorage.getItem('token') || '';
    return token;
}

/**
 * @description 删除token
 */
export function removeToken() {
    localStorage.removeItem('token');
}

/**
 * @description 存入文章的ID
 * @param {String} content
 */
export function setDetailId(content: string) {
    if (!localStorage) {
        throw new Error('您的浏览器不支持localStorage,请尝试更新浏览器');
    }
    localStorage.setItem('id', content);
}

/**
 * @description 取得文章的ID
 * @returns {String} ID
 */
export function getDetailId() {
    if (!localStorage) {
        return -1;
    }
    const id = localStorage.getItem('id') || '';
    return id;
}

/**
 * @description 删除文章的ID
 */
export function removeDetailId() {
    localStorage.removeItem('id');
}

/**
 * @description 存入文章
 * @param {String} content
 */
export function setArticle(content: string) {
    if (!localStorage) {
        throw new Error('您的浏览器不支持localStorage,请尝试更新浏览器');
    }
    localStorage.setItem('article', content);
}

/**
 * @description 取得文章
 * @returns {String} article
 */
export function getArticle() {
    if (!localStorage) {
        return '';
    }
    const token = localStorage.getItem('article') || '';
    return token;
}

/**
 * @description 删除文章
 */
export function removeArticle() {
    localStorage.removeItem('article');
}