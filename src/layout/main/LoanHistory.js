import React from 'react';


export default function LoanHistory() {

    return (
      <div className="container">
          <div className="text-center">
              <button className="btn btn-success">Request New Loan</button>
              <button className="btn btn-secondary ml-2">Withdraw Funds</button>
          </div>
          <br />
          Loan History:
          <div className="card card-body shadow mt-3">
              <div className="card card-body shadow">
                  <div className='history-card'>
                    <div>
                        Request Date: Aug 4, 2020 <br/>
                        Amount: N15,000
                    </div>
                    <div>
                        Status:<span className="badge badge-warning"> Running</span> <br/>
                        Intrest: 10%
                    </div>
                  </div>
                </div>  
                <div className="card card-body shadow">
                   <div className="history-card">
                        <div>
                            Request Date: Jul 1, 2020 <br/>
                            Amount: N10,000
                        </div>
                        <div>
                            Status:<span className="badge badge-success"> Paid</span> <br/>
                            Intrest: 10%
                        </div>
                    </div>
                </div>
                <div className="card card-body shadow">    
                    <div className="history-card">
                        <div>
                            Request Date: Feb 10, 2020 <br/>
                            Amount: N35,000
                        </div>
                        <div>
                            Status:<span className="badge badge-success"> Paid</span> <br/>
                            Intrest: 10%
                        </div>
                    </div>
                </div>
      </div>

    </div>
      
    )
  }