import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  ListBook: {title: string};
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;
export type ListBookScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ListBook'
>;

export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
export type ListBookScreenRouteProp = RouteProp<RootStackParamList, 'ListBook'>;
