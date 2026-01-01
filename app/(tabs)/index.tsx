import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// 1. 引入字體載入工具
import { useFonts } from 'expo-font';
// 2. 引入四種字體的樣式
import { Caveat_400Regular } from '@expo-google-fonts/caveat';
import { CormorantGaramond_400Regular } from '@expo-google-fonts/cormorant-garamond';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { ZenKurenaido_400Regular } from '@expo-google-fonts/zen-kurenaido';

export default function HomeScreen() {
  // 3. 載入所有字體
  let [fontsLoaded] = useFonts({
    'Zen': ZenKurenaido_400Regular,
    'Vibes': GreatVibes_400Regular,
    'Caveat': Caveat_400Regular,
    'Garamond': CormorantGaramond_400Regular,
  });

  // 4. 判斷字體是否載入完成，未完成前顯示載入文字
  if (!fontsLoaded) {
    return (
      <View style={styles.mainWrapper}>
        <Text>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainWrapper}>
      {/* 使用 ScrollView 包裹主要內容，避免畫面太長塞不下 */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.baseText, { fontFamily: 'Zen' }]}>
          Name:北川泠
        </Text>
        <Text style={[styles.baseText, { fontFamily: 'Caveat', fontSize: 35 }]}>
          Student Number:111319040
        </Text>
      </ScrollView>

      {/* FAB 懸浮按鈕：放在 ScrollView 外層，這樣它就不會跟著捲動 */}
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
    flex: 1, // 讓外層容器佔滿整個螢幕
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000ff',
  },
  baseText: {
    fontSize: 24,
    marginVertical: 15,
    textAlign: 'center',
    color: '#fff25eff',
  },
  // FAB 的關鍵樣式
  fab: {
    position: 'absolute',     // 絕對定位
    width: 60,                // 寬度
    height: 60,               // 高度
    alignItems: 'center',
    justifyContent: 'center',
    right: 15,                // 距離右邊 30
    bottom: 30,               // 距離底部 30
    backgroundColor: '#8A2BE2', // 按鈕顏色
    borderRadius: 30,         // 變成圓形
    elevation: 8,             // Android 陰影
    shadowColor: '#000',      // iOS 陰影
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    fontSize: 30,
    color: 'white',
    lineHeight: 30,
  },
});