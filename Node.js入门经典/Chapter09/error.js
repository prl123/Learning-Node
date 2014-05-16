function notDefined() {
    try {
        someFunc();
    } catch (e) {
        console.error(e);
    }
}

notDefined();