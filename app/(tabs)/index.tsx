import { Image, StyleSheet, Platform, View, Button, ScrollView, TouchableOpacity } from 'react-native';


import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '../../constants/Colors'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { DefaultTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {

  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <ThemedView style={styles.headerText}>
          <ThemedText type="title" style={styles.title}>Hello, Sebastian!</ThemedText>
          <ThemedText type="link" style={{ opacity: 0.5, color: 'black' }}>Your passwords are securely encrypted.</ThemedText>
        </ThemedView>

        <ThemedView style={styles.headerInteraction}>
          <TouchableOpacity onPress={() => router.push('/profile')}>
            <Ionicons name='person-outline' size={25} style={{ color: 'black' }} />
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.passwordCard}>
        <ThemedView style={styles.passwordCardIcon} backgroundColor={'#66E502'}>
          <Ionicons name='lock-closed-outline' size={25} style={{ color: 'white' }} />
        </ThemedView>
        <ThemedText>New password</ThemedText>
        <ThemedText>Create a new password within 2 clicks.</ThemedText>
        <ThemedView style={styles.button}>
          <Button title='Add new' color={'#0C0C0C'}></Button>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.passwordOptionContainer}>
        <TouchableOpacity style={styles.passwordOptionCard} onPress={() => router.push('/explore')}>
          <Ionicons name='lock-open-outline' style={styles.passwordCardIcon} size={25} backgroundColor={'#A49AFD'} />
          <ThemedText style={styles.passwordCardText}>All passwords</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passwordOptionCard}>
          <Ionicons name='key-outline' style={styles.passwordCardIcon} size={25} backgroundColor={'#FF8D8D'} />
          <ThemedText style={styles.passwordCardText}>Codes (2FA)</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passwordOptionCard}>
          <Ionicons name='wifi-outline' style={styles.passwordCardIcon} size={25} backgroundColor={'#60D3EE'} />
          <ThemedText style={styles.passwordCardText}>WLAN</ThemedText>
        </TouchableOpacity>

        <TouchableOpacity style={styles.passwordOptionCard}>
          <Ionicons name='extension-puzzle-outline' style={styles.passwordCardIcon} size={25} backgroundColor={'#F14871'} />
          <ThemedText style={styles.passwordCardText}>More</ThemedText>
        </TouchableOpacity>
      </ThemedView>


      <ThemedView style={styles.savedPasswordsContainer}>
        <ThemedView style={styles.savedPasswords}>
          <ThemedText style={{
            color: '#0C0C0C',
            fontWeight: 700
          }}>
            Saved Passwords
          </ThemedText>

          <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: 'transparent' }}>
            <ThemedText style={{ color: '#0C0C0C' }}>See all</ThemedText>
            <Ionicons name='arrow-forward-outline' size={25} color={'#0C0C0C'} />
          </TouchableOpacity>
        </ThemedView>

        <ThemedView style={styles.savedPasswordsContainer}>

          <TouchableOpacity style={styles.savedPasswordsCard}>
            <ThemedView style={styles.savedPasswordCardContent}>
              <ThemedView style={styles.savedPasswordCardIcon}>
                <Ionicons name='logo-paypal' style={styles.passwordCardIcon} size={25} backgroundColor={'#002C8B'} />
              </ThemedView>

              <ThemedView style={styles.savedPasswordCardText}>
                <ThemedText style={styles.passwordCardText}>PayPal</ThemedText>
                <ThemedText style={{ opacity: 0.5, color: 'black' }}>Added on 31/09/2024</ThemedText>
              </ThemedView>
            </ThemedView>
            <Ionicons name='arrow-forward-outline' size={25} color={'#0C0C0C'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.savedPasswordsCard}>
            <ThemedView style={styles.savedPasswordCardContent}>
              <ThemedView style={styles.savedPasswordCardIcon}>
                <Ionicons name='logo-figma' style={styles.passwordCardIcon} size={25} backgroundColor={'#A259FF'} />
              </ThemedView>

              <ThemedView style={styles.savedPasswordCardText}>
                <ThemedText style={styles.passwordCardText}>Figma</ThemedText>
                <ThemedText style={{ opacity: 0.5, color: 'black' }}>Added on 14/03/2024</ThemedText>
              </ThemedView>
            </ThemedView>
            <Ionicons name='arrow-forward-outline' size={25} color={'#0C0C0C'} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.savedPasswordsCard}>
            <ThemedView style={styles.savedPasswordCardContent}>
              <ThemedView style={styles.savedPasswordCardIcon}>
                <Ionicons name='logo-stackoverflow' style={styles.passwordCardIcon} size={25} backgroundColor={'#F48024'} />
              </ThemedView>

              <ThemedView style={styles.savedPasswordCardText}>
                <ThemedText style={styles.passwordCardText}>Stackoverflow</ThemedText>
                <ThemedText style={{ opacity: 0.5, color: 'black' }}>Added on 01/02/2024</ThemedText>
              </ThemedView>
            </ThemedView>
            <Ionicons name='arrow-forward-outline' size={25} color={'#0C0C0C'} />
          </TouchableOpacity>

        </ThemedView>
      </ThemedView>


    </ScrollView>
  );
}

const styles = StyleSheet.create({

  savedPasswordCardContent: {
    display: 'flex',
    alignItems: 'center',
    gap: 15,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    color: '#0C0C0C'
  },

  savedPasswordCardIcon: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    color: '#0C0C0C'
  },

  passwordCardText: {
    backgroundColor: 'transparent',
    color: '#0C0C0C'
  },

  savedPasswordCardText: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'transparent',
    color: '#0C0C0C'
  },

  savedPasswordsCard: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    margin: 15,
    marginTop: 10,
    marginBottom: 10,
    flexBasis: '100%',
    flexGrow: 1
  },

  savedPasswordsContainer: {
    display: 'flex',
    backgroundColor: 'transparent',
    color: '#0C0C0C',

  },

  savedPasswords: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
    color: '#0C0C0C'
  },

  headerText: {
    backgroundColor: 'transparent'
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    backgroundColor: 'transparent'
  },

  headerInteraction: {
    backgroundColor: 'transparent',
  },


  container: {
    display: 'flex',
    marginTop: 55
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
