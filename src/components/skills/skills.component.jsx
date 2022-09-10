import { Meter } from 'grommet';

import React from 'react';

// separate Meter maybe pass props for each Skills %

const SkillMeters = () => {
    return(
            <Meter
            values={[{
            value: 90,
            label: 'ninety',
            
            onClick: () => {}
            }]}
            aria-label="meter"
        />
        );
}

export default SkillMeters;