
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import { getUnreadAnnouncements } from '../services/announcementUtils';
import type { Announcement } from '../types/announcement';

const sampleAnnouncements: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
];

export default function HomeScreen() {
  const unreadAnnouncements = getUnreadAnnouncements(sampleAnnouncements);

=======

export default function HomeScreen() {
>>>>>>> 743e7a05f46a107c09d494086a60459bee66b434
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Connect</Text>
      <Text>One campus. Connected students.</Text>
<<<<<<< HEAD
      <Text style={styles.summary}>
        Unread announcements: {unreadAnnouncements.length}
      </Text>
      {sampleAnnouncements.map((item) => (
        <Text key={item.id} style={styles.announcement}>
          {item.title}
        </Text>
      ))}
=======
      <Text>Welcome to the Week 1 project foundation.</Text>
>>>>>>> 743e7a05f46a107c09d494086a60459bee66b434
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
  },
<<<<<<< HEAD
  summary: {
    marginTop: 24,
    fontWeight: '600',
  },
  announcement: {
    marginTop: 12,
  },
=======
>>>>>>> 743e7a05f46a107c09d494086a60459bee66b434
});
