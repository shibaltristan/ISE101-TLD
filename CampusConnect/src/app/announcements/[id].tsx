import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { findAnnouncementById } from '@/data/announcements';

export default function AnnouncementDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const announcement = findAnnouncementById(id);

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Announcement not found</Text>
        <Text style={styles.message}>We couldn’t find that update. Please go back and try another item.</Text>
        <Pressable accessibilityRole="button" onPress={() => router.back()} style={styles.button}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.category}>{announcement.category}</Text>
      <Text style={styles.title}>{announcement.title}</Text>
      <Text style={styles.status}>{announcement.read ? 'Read' : 'Unread announcement'}</Text>

      <Pressable accessibilityRole="button" onPress={() => router.back()} style={styles.button}>
        <Text style={styles.buttonText}>Back to announcements</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
    justifyContent: 'center',
  },
  category: {
    color: '#174A7E',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#0E1B2A',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
    marginBottom: 12,
  },
  message: {
    color: '#526070',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  status: {
    color: '#334155',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 24,
  },
  button: {
    minHeight: 52,
    backgroundColor: '#174A7E',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
