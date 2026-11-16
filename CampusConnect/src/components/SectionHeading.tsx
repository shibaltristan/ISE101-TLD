import { StyleSheet, Text, View } from 'react-native';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export default function SectionHeading({ title, subtitle, eyebrow = 'Campus Connect' }: SectionHeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>{eyebrow}</Text>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    paddingBottom: 8,
  },
  eyebrow: {
    color: '#49627A',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  title: {
    color: '#0E1B2A',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
  },
  subtitle: {
    color: '#526070',
    fontSize: 15,
    lineHeight: 22,
  },
});
