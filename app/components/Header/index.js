import React from 'react';

import VendorButton from '../Forms/VendorButton';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

import './LandingHeader.scss';

export default function LandingHeader(props) {
  return (
    <div className='landing-header'>
      <Logo className='company-logo'/>
      <div className='company-name'>Vendorstan</div>
      <div className='buttons'>
        <VendorButton color='secondary'>
          Log in
        </VendorButton>
        <VendorButton variant='contained'>
          Register for free
        </VendorButton>
      </div>
    </div>
  )
}
