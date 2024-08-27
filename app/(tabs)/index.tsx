import { Image, StyleSheet, Platform, View, Button, ScrollView, TouchableOpacity } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '../../constants/Colors'
import { EvilIcons } from '@expo/vector-icons';
import { DefaultTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Hello, Sebastian!</ThemedText>
        <ThemedText type="link" style={{ opacity: 0.5, color: 'black' }}>Your passwords are securely encrypted.</ThemedText>
      </ThemedView>

      <ThemedView style={styles.passwordCard}>
        <ThemedView style={styles.passwordCardIcon} backgroundColor={'#66E502'}>
          <EvilIcons name='lock' size={30} style={{ color: 'white' }}  />
        </ThemedView>
        <ThemedText>New password</ThemedText>
        <ThemedText>Create a new password within 2 clicks.</ThemedText>
        <ThemedView style={styles.button}>
          <Button title='Add new'></Button>
        </ThemedView>
      </ThemedView>

      <TouchableOpacity style={styles.passwordOptionContainer}>
        <TouchableOpacity style={styles.passwordOptionCard} onPress={() => router.push('/explore')}>
          <EvilIcons name='unlock' style={styles.passwordCardIcon} size={30} backgroundColor={'#A49AFD'} />
          <ThemedText style={styles.passwordCardText}>All passwords</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passwordOptionCard}>
          <EvilIcons name='lock' style={styles.passwordCardIcon} size={30} backgroundColor={'#FF8D8D'} />
          <ThemedText style={styles.passwordCardText}>Codes (2FA)</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passwordOptionCard}>
          <EvilIcons name='chart' style={styles.passwordCardIcon} size={30} backgroundColor={'#60D3EE'} />
          <ThemedText style={styles.passwordCardText}>WLAN</ThemedText>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.passwordOptionCard}>
          <EvilIcons name='external-link' style={styles.passwordCardIcon} size={30} backgroundColor={'#F14871'} />
          <ThemedText style={styles.passwordCardText}>More</ThemedText>
        </TouchableOpacity>

      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 60
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: Colors.light.background,
    padding: 5,
    margin: 5,
    borderRadius: 8,
    width: '100%'
  },
  title: {
    color: '#0C0C0C',
    fontWeight: 600
  },
  passwordCardIcon: {
    opacity: 0.8,
    color: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    textAlign: 'center',
    padding: 5,
  },

  passwordCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ED602',
    borderRadius: 20,
    padding: 15,
    margin: 15,
  },

  passwordOptionCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 30,
    margin: 15,
    flexBasis: '42%',
    flexGrow: 1,
    gap: 10
  },

  passwordCardText: {
    color: 'black',
  },

  passwordOptionContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    minWidth: '100%',
    backgroundColor: DefaultTheme.colors.background,
    justifyContent: 'space-between',
  },


  titleContainer: {
    flexDirection: 'column',
    // top: 60,
    margin: 15,
    backgroundColor: 'transparent'
  }
});
