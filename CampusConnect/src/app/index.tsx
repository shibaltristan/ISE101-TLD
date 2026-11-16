import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import ActionButton from '@/components/ActionButton';
import AnnouncementPanel from '@/components/AnnouncementPanel';
import CampusLogo from '@/components/CampusLogo';
import SectionHeading from '@/components/SectionHeading';
import { announcementData } from '@/data/announcements';
import { getUnreadAnnouncements } from '@/services/announcementUtils';
import type { Announcement } from '@/types/announcement';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const [compact, setCompact] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCompact(width < 380);
  }, [width]);

  const unreadAnnouncements = getUnreadAnnouncements(announcementData);

  const handleActionPress = () => {
    Alert.alert('Campus Connect', 'You are viewing the latest student updates.');
  };

  const handleAnnouncementPress = (item: Announcement) => {
    router.push(`/announcements/${item.id}`);
  };

  return (
    <View style={styles.screen}>
      <View style={[styles.content, compact && styles.contentCompact]}>
        <SectionHeading title="Campus Connect" subtitle="Campus updates in one place." />

        <Text style={[styles.intro, compact && styles.introCompact]}>
          Stay connected to classes, events, and campus reminders that matter most this week.
        </Text>

        <CampusLogo />

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Unread</Text>
          <Text style={styles.summaryValue}>{unreadAnnouncements.length}</Text>
        </View>

        <AnnouncementPanel
          announcements={announcementData}
          onItemPress={handleAnnouncementPress}
          style={styles.list}
        />

        <ActionButton label="View more updates" onPress={handleActionPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  content: {
    flex: 1,
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
    gap: 16,
  },
  contentCompact: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  intro: {
    color: '#334155',
    fontSize: 16,
    lineHeight: 24,
  },
  introCompact: {
    fontSize: 15,
  },
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  summaryLabel: {
    color: '#526070',
    fontSize: 14,
    fontWeight: '600',
  },
  summaryValue: {
    color: '#174A7E',
    fontSize: 20,
    fontWeight: '800',
  },
  list: {
    flex: 1,
    marginTop: 4,
  },
});
