import React, { Fragment } from 'react';
import Header from '../common/Header';

export default function Profile() {

    return (
        <Fragment>
            <Header />
      <div className='form-group'>
          <div className='card card-body shadow'>
              <div className='user-profile'>
                  <h3><b> User Profile </b></h3>
                  <button className='btn btn-warning btn-block'> Edit Profile</button>
              </div>
              <form>
              <div className='text-center'>
                  <label >Name</label>
                  <input type='text'  className='form-control' placeholder='Enter Your Fullname'/>
              </div>
              <div className='text-center'>
                  <label >Phone Number</label>
                  <input type='text' className='form-control' placeholder='Enter Your Phone Number'/>
              </div>
              <div className='text-center'>
                  <label >Email</label>
                  <input type='text' className='form-control' placeholder='Enter Your Email Address'/>
              </div>
              <div className='text-center'>
                  <label >BVN</label>
                  <input type='text' className='form-control' placeholder='Enter Your BVN'/>
              </div>

              </form>
              <div className='text-center'>
                  <label >Empolyment Status</label>
                  <input type='radio' name='r_empolyment'/>Empolyed
                  <input type='radio' name='r_empolyment'/>Unempolyed
              </div>
              <div className='text-center'>
                  <label >Upload Bank Statement</label>
                  <input type='chose-file'/>
              </div>
              <div className='text-center'>
                  <label >Link Card (PayStack)</label>
                  <input type='text' className='form-control' placeholder='Enter Your PaySalk UID'/>
              </div>
              <div className='text-center'>
                  <button type='submit' className='btn btn-success btn-block' value='Submit'/>
              </div>
              <div className='text-center'>
                  <h5> Reset Password? <a href='#'><b>Click Here</b></a></h5>
              </div>
              

          </div>

      </div>
      </Fragment>
    )
  }

  