import "./Advisory.css";
function Advisoryarea() {
  return (
    <div className="col-lg-12  mt-5" id="advisory-section">
      <h1 className="adh1">Advisory Areas</h1>
      <hr />

      <div className="row">
        <div className="col-lg-1"></div>
      {/* ===list1=== */}      
      <div className="col-lg-5 col-sm-10 list">
       <ul className="fa-ul">      
         <li>
           <span className="fa-li">
             <i className="fa-solid fa-business-time"></i>
           </span>
            <a href="">Business Sectors</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-seedling"></i>
           </span>
            <a href="">Agriculture, Forestry and Fishing</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-hand-holding-heart"></i>
           </span>
            <a href="">Charities and Non-Profit</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-graduation-cap"></i>
           </span>
            <a href="">Education</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-utensils"></i>
           </span>
            <a href="">Food and Beverage</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-heart-pulse"></i>
           </span>
            <a href="">Healthcare</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-hotel"></i>
           </span>
            <a href="">Hospitality and Tourism</a>
         </li>
   
        </ul>
      </div>
    {/* ====column 2=== */}

    <div className="col-lg-5 col-sm-10 list">
       <ul class="fa-ul">      
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-industry"></i>
           </span>
            <a href="">Manufacturing & Distribution</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-people-group"></i>
           </span>
            <a href="">Private Clients and Family Offices</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-briefcase"></i>
           </span>
            <a href="">Professional Services</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-user-tie"></i>
           </span>
            <a href="">Government and Public Administration  </a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-person-digging"></i>
           </span>
            <a href="">Real Estate & Construction</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-laptop"></i>
           </span>
            <a href="">Software Houses & Information Technology</a>
         </li>
         <li>
           <span class="fa-li">
             <i class="fa-solid fa-bus"></i>
           </span>
            <a href="">Transport and Logistics </a>
         </li>
   
        </ul>
      </div>
     {/* ====end row===  */}
     </div>

    {/* =====end container====  */}
    </div>
  );
}

export default Advisoryarea;
