const wipe = (node) => {
    node.textContent = "";
    while (node.hasChildNodes()) {
        node.removeChild(node.LastChild);
    }
}

export default wipe;