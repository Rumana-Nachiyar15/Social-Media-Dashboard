var sidebarOpen = false;
var sidebar = document.getElementsById("slidebar");
function opensidebar() {
   if (!sidebarOpen){
    sidebar = classList.add("sidebar-responsive");
    sidebarOpen=true;

   }
}
function classSider(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen=false;
    }
    
    


}