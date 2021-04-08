import { Home, Cart, Search, Profile, ProductList,ProductDetails,FinalBuy, PayCallBack,Help,Splash, Login, Register, EditProfile} from '../Screen';
import Colors from '../Config/Styles/Colors';

import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from "react-navigation-stack";



const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                tabBarLabel: 'Cart',
                activeColor: '#e4002b',
                inactiveColor: '#fff',
            barStyle: { backgroundColor: '#464646' },
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'Search',
                activeColor: '#e4002b',
                inactiveColor: '#fff',
                barStyle: { backgroundColor: '#464646' },
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
            }
        },
    },
    {
        initialRouteName: "Home",
        order: ["Home", "Cart", "Search", "Profile"],
        shifting: true,
        activeColor: '#e4002b',
        inactiveColor: '#fff',
        barStyle: { backgroundColor: '#464646' },
    },
);
const AppStackNavigator = createStackNavigator(
    {
        Splash: {
            screen: Splash,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#464646',
                  },
                tabBarLabel: 'Splash',
                title:'',
                cardStyle: { backgroundColor: '#464646' },
                headerShown: false,

            }
        },

        Login: {
            screen: Login,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#464646',
                  },
                tabBarLabel: 'Login',
                title:'',
                cardStyle: { backgroundColor: '#464646' },
                headerShown: false,

            }
        },

        Register: {
            screen: Register,
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#464646',
                  },
                tabBarLabel: 'Register',
                title:'',
                cardStyle: { backgroundColor: '#464646' },
                headerShown: false,

            }
        },


        // Help: {
        //     screen: Help,
        //     navigationOptions: {
        //         tabBarLabel: 'Help',
        //     }
        // },
        BottomNavigator: {
            screen: TabNavigator,
            navigationOptions:{title:"VellikStore",
            header:null
        }
           

        },
        ProductList: {
            screen: ProductList,
            navigationOptions:{
                header:null
            }
        },
        ProductDetails: {
            screen: ProductDetails,
            navigationOptions:{
                header:null
            }
        },
        FinalBuy: {
            screen: FinalBuy,
            navigationOptions:{
               // title:"Final  Buy",
                header:null

            }
        },
        PayCallBack:{
            screen: PayCallBack,
            navigationOptions:{
               // title:"pay and  Buy",
                header:null
            } 
        },
        EditProfile:{
            screen: EditProfile,
            navigationOptions:{
               // title:"pay and  Buy",
                header:null
            } 
        }
    }
)

export default createAppContainer(AppStackNavigator);
// const AppBottonNavigator = createMaterialBottonTabNavigator(
//     {
//         Home: {  
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: "home",
//                 barStyle: {
//                     backGroundColor: Colors.tabBarColor.homeTabColor,
//                 }
//             }
//         },
//         Cart: {
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: "cart",
//                 barStyle: {
//                     backGroundColor: Colors.tabBarColor.cartTabColor,
//                 }
//             }
//         }
//         , Sreach: {
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: "sreach",
//                 barStyle: {
//                     backGroundColor: Colors.tabBarColor.sreachTabColor,
//                 }
//             }
//         },
//         Profile: {
//             screen: Home,
//             navigationOptions: {
//                 tabBarLabel: "profile",
//                 barStyle: {
//                     backGroundColor: Colors.tabBarColor.profileTabColor,
//                 }
//             }
//         }
//     }, {
//     initialRouteName: 'Home',
//     order: ["Home", "Cart", "Search", "Profile"],
//     shifting: true,
//     tabBarOptions: {
//         activeTintcolor: 'blue',
//         inactiveTintcolor: 'gray',
//         style: {
//             backGroundColor: '#f1f1f1',
//         },
//         indicatorStyle: {
//             backGroundColor: 'blue',
//         },
//         shoeIcon: true
//     },
// }
// )

 //export default createAppContainer(AppBottonNavigator);
 //export default createAppContainer(TabNavigator);  
