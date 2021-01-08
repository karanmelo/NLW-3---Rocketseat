import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

export default function Routes() {

    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Mapa" />
                    }}
                />
                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDetails}
                />
                <Screen
                    name="SelectMapPosition"
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Selecione no mapa" />
                    }}
                />
                <Screen
                    name="OrphanageData"
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    )
}