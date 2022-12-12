import React from 'react';
import Icon1 from '../../images/ootb.png';
import Icon2 from '../../images/uob.png';
import Icon3 from '../../images/tsi.png';
import Icon4 from '../../images/tgt.png';
import Icon5 from '../../images/img1-modified.png';
import Icon6 from '../../images/img2-modified.png';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Past Work Experiences</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Gifting.sg</ServicesH2>
          <ServicesP>
            Front-End & Marketing Internship
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Swapie.co</ServicesH2>
          <ServicesP>
          Front-End & Marketing Internship
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Out Of The Box Inc.</ServicesH2>
          <ServicesP>
            Digital Design and Data Analyst Internship
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>UOB</ServicesH2>
          <ServicesP>
            Customer Service 
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Childcare</ServicesH2>
          <ServicesP>
            Childcare Teacher
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Others</ServicesH2>
          <ServicesP>
            Other Jobs
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
