import type { Announcement } from '@/types/announcement';

export const announcementData: Announcement[] = [
  { id: 'a1', title: 'Enrollment reminders', category: 'Academic', read: false },
  { id: 'a2', title: 'Campus orientation', category: 'Events', read: true },
  { id: 'a3', title: 'Library hours update', category: 'Notice', read: false },
  { id: 'a4', title: 'Student wellness workshop registration opens Tuesday', category: 'Events', read: false },
  { id: 'a5', title: 'Dining hall schedule adjusted for finals week', category: 'Notice', read: true },
];

export function findAnnouncementById(id: string | string[] | undefined): Announcement | undefined {
  const normalizedId = Array.isArray(id) ? id[0] : id;
  return announcementData.find((item) => item.id === normalizedId);
}
