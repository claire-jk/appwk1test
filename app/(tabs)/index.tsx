import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { CormorantGaramond_400Regular } from '@expo-google-fonts/cormorant-garamond';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { ZenKurenaido_400Regular } from '@expo-google-fonts/zen-kurenaido';
import { useFonts } from 'expo-font';
import React from 'react';
import { Alert, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    'Zen': ZenKurenaido_400Regular,
    'Vibes': GreatVibes_400Regular,
    'Caveat': Caveat_400Regular,
    'Garamond': CormorantGaramond_400Regular,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingWrapper}>
        <Text style={{ color: 'white' }}>Loading Fonts...</Text>
      </View>
    );
  }

  // 自介欄設定
  const profileConfig = {
    backgroundColor: '#bf8aff79', 
    fontFamily: 'Zen',           
    textColor: '#ffffff',        
    name: '陳筠蒨',
    id: '111319040'
  };

  return (
    <View style={styles.mainWrapper}>
      
      {/* 1. 上半部自介欄 */}
      <View style={[styles.topContainer, { backgroundColor: profileConfig.backgroundColor }]}>
        <View style={styles.profileContent}>
          <View style={styles.circleMarker} />
          {/* 修正後的 textGroup：確保所有文字都在 <Text> 內 */}
          <View style={styles.textGroup}>
            <Text style={[styles.profileTitle, { fontFamily: 'Zen', color: profileConfig.textColor }]}>
              自介
            </Text>
            <Text style={[styles.subText, { color: profileConfig.textColor }]}>Name: {profileConfig.name}</Text>
            <Text style={[styles.subText, { color: profileConfig.textColor }]}>ID: {profileConfig.id}</Text>
          </View>
        </View>
      </View>

      {/* 2. 下半部四宮格內容區 */}
      <ScrollView contentContainerStyle={styles.bottomScrollContent}>
        <View style={styles.gridContainer}>
          
          <View style={styles.gridBox}>
            <Text style={[styles.gridText, { fontFamily: 'Zen' }]}>動漫</Text>
          </View>

          <View style={styles.gridBox}>
            <Text style={[styles.gridText, { fontFamily: 'Caveat' }]}>BTS</Text>
          </View>

          <View style={styles.gridBox}>
            <Text style={[styles.gridText, { fontFamily: 'Zen' }]}>寫文</Text>
          </View>

          <View style={styles.gridBox}>
            <Text style={[styles.gridText, { fontFamily: 'Zen' }]}>聊聊</Text>
          </View>

        </View>
      </ScrollView>

      {/* FAB 懸浮按鈕 */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => Alert.alert("點擊", "您按下了 FAB！")}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#000', 
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  topContainer: {
    marginTop: 100,         
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 2,
    borderColor: '#fff',   
    borderRadius: 5,
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circleMarker: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 20,
  },
  textGroup: {
    flex: 1, // 讓文字區域自動填滿剩餘空間
  },
  profileTitle: {
    fontSize: 28,
    //fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    marginTop: 2,
    fontFamily: 'Caveat',
  },
  bottomScrollContent: {
    paddingVertical: 30,
  },
  gridContainer: {
    flexDirection: 'row',     
    flexWrap: 'wrap',         
    justifyContent: 'space-evenly', 
  },
  gridBox: {
    width: windowWidth * 0.4, 
    height: windowWidth * 0.4, 
    borderWidth: 2,
    borderColor: '#fff',      
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 25,        
  },
  gridText: {
    fontSize: 28,
    color: '#fff',
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    backgroundColor: '#8A2BE2',
    shadowColor: '#ffffffff',
    shadowOpacity: 0.8,
    shadowRadius: 5,
    shadowOffset: { height: 10, width: 10 },
    borderRadius: 30,
    elevation: 8,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
  },
});