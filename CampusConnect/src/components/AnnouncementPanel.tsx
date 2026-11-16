import { FlatList, StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import type { Announcement } from '@/types/announcement';

import AnnouncementCard from './AnnouncementCard';

type AnnouncementPanelProps = {
  announcements: Announcement[];
  onItemPress?: (item: Announcement) => void;
  style?: StyleProp<ViewStyle>;
};

export default function AnnouncementPanel({ announcements, onItemPress, style }: AnnouncementPanelProps) {
  return (
    <FlatList
      data={announcements}
      keyExtractor={(item) => item.id}
      style={style}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <AnnouncementCard item={item} onPress={onItemPress} />}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: 12,
  },
  separator: {
    height: 12,
  },
});
