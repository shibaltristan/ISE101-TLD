import { Pressable, StyleSheet, Text, View } from 'react-native';

import type { Announcement } from '@/types/announcement';

type AnnouncementCardProps = {
  item: Announcement;
  onPress?: (item: Announcement) => void;
};

export default function AnnouncementCard({ item, onPress }: AnnouncementCardProps) {
  const unread = !item.read;

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Announcement: ${item.title}`}
      onPress={() => onPress?.(item)}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <View style={styles.headerRow}>
        <Text style={styles.category}>{item.category}</Text>
        {unread ? <View style={styles.unreadBadge} /> : null}
      </View>

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.meta}>{unread ? 'New update' : 'Read'}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E1E8F0',
    backgroundColor: '#FFFFFF',
    minHeight: 88,
    justifyContent: 'center',
  },
  cardPressed: {
    backgroundColor: '#F3F7FB',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  category: {
    color: '#174A7E',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.7,
    textTransform: 'uppercase',
  },
  unreadBadge: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: '#E85757',
  },
  title: {
    color: '#101828',
    fontSize: 17,
    fontWeight: '700',
    lineHeight: 24,
    marginBottom: 4,
  },
  meta: {
    color: '#526070',
    fontSize: 12,
    fontWeight: '600',
  },
});
