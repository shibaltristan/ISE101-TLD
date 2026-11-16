import { ScrollView, StyleSheet, Text } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';
import SectionHeading from '@/components/SectionHeading';
import { announcementData } from '@/data/announcements';
import { useRouter } from 'expo-router';

export default function AnnouncementsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <SectionHeading title="Announcements" subtitle="Latest campus updates and reminders." />

      <Text style={styles.summary}>Showing {announcementData.length} updates</Text>

      <AnnouncementPanel
        announcements={announcementData}
        onItemPress={(item) => router.push(`/announcements/${item.id}`)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 16,
  },
  summary: {
    color: '#526070',
    fontSize: 14,
    fontWeight: '600',
  },
});
