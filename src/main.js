window.onload = function()
{
    if(window.localStorage)
    {
        const checkbox = document.getElementById("autoplay");

        checkbox.onchange = function()
        {
            console.log("samdsaf");
            localStorage.setItem("autoPlayOn", this.checked);
        }
        
        const autoPlayOn = localStorage.getItem("autoPlayOn");
        if(autoPlayOn !== null && autoPlayOn !== undefined)
        {
            if(autoPlayOn === "true")
            {
                checkbox.setAttribute("checked", "checked");
            }
        }
    }
    

}
