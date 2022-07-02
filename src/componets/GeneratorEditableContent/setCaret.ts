/**
 * Replaces the caret.
 * @param target
 * @param selection
 * @param offset
 * @param root
 */
export const replaceCaret = (target: string, selection: Selection, offset: number, root: HTMLDivElement) => {
    const range = document.createRange();
    const el = root.querySelector(`#${target}`);

    if (el) {
        // Sets the caret offset to the element's content.
        if (el.firstChild) {
            if (el.firstChild.textContent && el.firstChild.textContent.length >= offset) {
                range.setStart(el.firstChild, offset);
                range.setEnd(el.firstChild, offset);
            } else {
                range.setStart(el.firstChild, offset - 1);
                range.setEnd(el.firstChild, offset - 1);
            }
        }
        // Sets the caret to the start of an element.
        else {
            range.setStart(el, 0);
            range.setEnd(el, 0);
        }

        if (el instanceof HTMLElement) el.focus();
    }
    // Sets the caret to the last element of the root element, if there is no element.
    else if (root.lastElementChild && root.lastElementChild.firstChild) {
        range.setStart(root.lastElementChild.firstChild, root.lastElementChild.firstChild.nodeValue?.length || 0);
        range.setEnd(root.lastElementChild.firstChild, root.lastElementChild.firstChild.nodeValue?.length || 0);
    }
    // Otherwise sets the caret to the root element.
    else {
        range.setStart(root, 0);
        range.setEnd(root, 0);
    }

    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
};

/**
 * Sets the caret.
 * @param target
 * @param siblingNext
 * @param anchorNode
 * @param anchorOffset
 * @param selection
 * @param root
 */
export const setCaret = (
    target: HTMLElement,
    siblingNext: Element | null,
    anchorNode: Node,
    anchorOffset: number,
    selection: Selection,
    root: HTMLDivElement
) => {
    if (target.innerText.trim().length < anchorOffset) {
        // Sets the caret to the beginning of the next word.
        if (siblingNext && siblingNext.id) {
            replaceCaret(siblingNext.id, selection, 0, root);
        }
        // Sets the caret to the beginning of the next new empty word.
        else {
            const el: Element | null = root.lastElementChild;

            if (el && el.id) {
                replaceCaret(el.id, selection, 0, root);
            }
        }
    } else if (target.innerText.trim().length > anchorOffset) {
        if (anchorNode.nodeValue) {
            const isWordHasSpace = anchorNode.nodeValue.split(' ').length > 1;

            if (isWordHasSpace) {
                // Sets the caret to the beginning of the next word.
                if (siblingNext) {
                    replaceCaret(siblingNext.id, selection, 0, root);
                }
                // Sets the caret to the beginning of the last word.
                else if (root.lastElementChild) {
                    replaceCaret(root.lastElementChild.id, selection, 0, root);
                }
            }
            // Sets the caret after the entered character when editing the beginning or middle of a word.
            else {
                replaceCaret(target.id, selection, anchorOffset, root);
            }
        }
        // Sets the caret to the end of the previous word if the current one is deleted.
        else {
            const el = anchorNode instanceof Text ? anchorNode.parentElement : anchorNode;
            const elId = (el as HTMLElement).id;
            const current = root.querySelector(`#${elId}`);

            if (current) {
                const prevSibling = current.previousSibling;
                const prevSiblingId = (prevSibling as HTMLElement)?.id;

                if (prevSiblingId && prevSibling && prevSibling.firstChild && prevSibling.firstChild.nodeValue) {
                    replaceCaret(prevSiblingId, selection, prevSibling.firstChild.nodeValue.length, root);
                }
            }
        }
    }
    // Sets the caret to the end of the edited word.
    else if (target.id) {
        replaceCaret(target.id, selection, anchorOffset, root);
    }
};
