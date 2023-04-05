import React from 'react';
import {
    Flex,
    Grid,
    GridItem,
    Text,
    Heading
} from '@chakra-ui/react';

import { Icon } from 'semantic-ui-react';

import { skillsData } from '../data/skillsData';

function Skills() {

    return (
        <Flex id='skills' className='skills content' direction='column' align='center'>
            <Heading className='content-heading'>SKILLS</Heading>
            <Grid templateColumns='repeat(6, 1fr)' gap='8'>
                {skillsData.map((skill) => (
                    <GridItem>
                        <Flex direction='column' align='center'>
                            <Icon name={skill.icon} size='huge'/>
                            <Text className='skillsText'>
                                {skill.tech}
                            </Text>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
}

export default Skills;