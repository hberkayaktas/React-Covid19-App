import React from 'react'

function Chart() {
      let degerler = [99, 60, 25, 80, 1];
  return (
      <div className="row mt-3">
      <div className="col">
        <div className="d-flex justify-content-center">
          <select className="form-select w-50" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </div>
        <div className="d-flex justify-content-center">
          <div className="chart" style={{width: '500px', height: '500px'}}>
            <ul className="chart__grid">
                  {
                         degerler.map((deger) => <li class="chart__item morph active" style={{paddingTop:`${100 - deger}%`}}><div class="chart__item__inner bg-death"><span>3560</span></div></li>            
                         )
                  }
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Chart