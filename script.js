function openTab(tabId) {
    var subTabs = document.getElementsByClassName("sub");
    for (const tab of subTabs) {
        tab.classList.add("hidden")
    }
    document.getElementById(tabId).classList.remove("hidden");
}