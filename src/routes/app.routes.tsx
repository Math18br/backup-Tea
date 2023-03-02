import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Menu01 } from '../screens/start/Menu'
import { Start01 } from '../screens/start/page01'
import { Start02 } from '../screens/start/page02'
import { Start03 } from '../screens/start/page03'
import { Start04 } from '../screens/start/page04'
import { MusicaMenu } from '../screens/musica/muscaMenu'
import { FoodInfo, InfoSobreTEA, OueEoTEA } from '../screens/infocards/OqueETea'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="start01" component={Start01} />
      <Screen name="start02" component={Start02} />
      <Screen name="start03" component={Start03} />
      <Screen name="start04" component={Start04} />
      <Screen name="mainMenu" component={Menu01} />
      <Screen name="musicaMenu" component={MusicaMenu} />
      <Screen name="foodInfo" component={FoodInfo} />
      <Screen name="teaInfo" component={InfoSobreTEA} />
      <Screen name="oQueInfo" component={OueEoTEA} />
    </Navigator>
  )
}
