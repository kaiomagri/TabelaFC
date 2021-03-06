import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Logo, Title } from './styles';

export default function LeagueItem({ data, navigation }) {
  return (
    <Container
      onPress={() => navigation.navigate('LeagueDetail', { league: data })}
    >
      <View>
        <Logo source={{ uri: data.strBadge }} />
      </View>
      <Title>{data.strLeague}</Title>
    </Container>
  );
}

LeagueItem.propTypes = {
  data: PropTypes.shape({
    strBadge: PropTypes.string,
    strLeague: PropTypes.string,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
