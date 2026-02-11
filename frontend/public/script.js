async function getBackendData() {
    try {
        const response = await fetch("/api/data");
        const data = await response.json();
        document.getElementById("output").innerText =
            JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("output").innerText =
            "Error connecting to backend";
    }
}
