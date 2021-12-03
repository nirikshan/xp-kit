import React  from "react";
import { StyleSheet, View, Text  , Dimensions  } from "react-native";
import { FontAwesome } from 'react-native-vector-icons'; 


export function ListItem({textname , icon , right}){

  const { height , width } = Dimensions.get('window');
  var defaultRightIcon = <FontAwesome name={'chevron-right'} size={20} color="grey" style={{fontWeight:'100'}}/>
  var hasRight = false;
  if(right  && typeof(right) == 'function'){
    hasRight = right();
    hasRight = typeof(hasRight) == 'object' ? hasRight : false;
  }
  return <View style={styles.a}>
      <View style={{ width : width * 0.10}}>
        <View style={styles.fontview}>
            <FontAwesome name="edit" size={20} color="white" style={{textAlign:'center' }}/>
        </View>
      </View>
      <View style={{ width : width * 0.69}}>
          <Text style={styles.textfirst}>{textname}</Text>
      </View>
      <View style={{paddingTop:7 , width : width * 0.15}}>
          {hasRight ? hasRight : defaultRightIcon }
      </View>
    </View>
}

const styles = StyleSheet.create({
  a:{
      flexDirection:'row' ,
      padding:10 ,
      borderBottomWidth:1 ,
      borderBottomColor:'#eee',
      flex:1 
      },

  fontview:{ 
      backgroundColor: '#5540f0' ,
      paddingLeft:9 ,
      paddingRight:7 ,
      paddingVertical:7 ,
      borderRadius:10 ,
      textAlign: 'center'
    },
    textfirst:{
      paddingVertical:5 ,
      paddingHorizontal:15 , 
      fontSize:18 ,
      fontWeight:'100'
    }
});
