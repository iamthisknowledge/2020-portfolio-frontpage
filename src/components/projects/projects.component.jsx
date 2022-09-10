import { Text, Anchor, Tabs, Tab, Box } from 'grommet';

import React from 'react';


const Projects = () => {
    return(
            <Tabs>
                <Tab title="Project 0">
                    <Box pad="medium">
                        <Anchor href="#" target="_blank" label="Face Detection App" />
                        <Text>Upload a pictures and use an AI API to detect where there is a face present.</Text>
                    </Box>
                </Tab>
                <Tab title="Project 1">
                <Box pad="medium">
                        <Anchor href="#" target="_blank" label="Robofriends App" />
                        <Text>Multiple Cards with search functionality.</Text>
                    </Box>
                </Tab>
                <Tab title="Project 2">
                <Box pad="medium">
                        <Anchor href="#" target="_blank" label="Countdown App" />
                        <Text>Minimal Countdown.</Text>
                    </Box>
                </Tab>
            </Tabs>
        );
}

export default Projects;