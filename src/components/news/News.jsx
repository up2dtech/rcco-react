import "./News.css"
export default function News()
{
    return (
        <>
        
            <div className="container-fluid news" id="updates-section">
                <h2>News And Updates</h2>
                <hr></hr>
                <div className="row-flex"> 
                    {/* <div className="date">
                       <h3>09</h3>
                         <span>oct 2020</span>
                    </div>   */}
                     {/* <div class="vl"></div> */}

                     <div className="updates">
                          
                          <marquee behavior="scroll" direction="left" scrollamount="3"><p className="newsp"><em>Pakistan's
                          Foreign Reserves</em> have fallen to an<strong> Alarming Level</strong>|&nbsp; Pakistan is battling the
                           worst economic crisis in recent times and is in dire need of foreign aid to cut its current account deficit besides 
                           having enough reserves to pay the debt.| &nbsp;  At the start of year <b>2023 </b>by 
                          <em>Paying two Foreign banks (Emirates NBD) & (Dubai Islamic Bank)</em> 
                          the net foreign reserves of Pakistan now stands <strong>$4.5 billion</strong>.
                          </p></marquee>
                     </div>

                </div>

            </div>

      
        </>
    );
}