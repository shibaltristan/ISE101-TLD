import { StyleSheet, Text, View } from 'react-native';

export default function CampusLogo() {
  const rays = Array.from({ length: 16 }, (_, index) => index);

  return (
    <View style={styles.logoWrap}>
      <View style={styles.badge}>
        {rays.map((index) => (
          <View
            key={index}
            style={[
              styles.ray,
              {
                transform: [{ rotate: `${(360 / rays.length) * index}deg` }],
              },
            ]}
          />
        ))}

        <View style={styles.innerBadge}>
          <Text style={styles.motto}>ALTIORA PETO</Text>
          <View style={styles.emblemContainer}>
            <View style={styles.book}>
              {Array.from({ length: 7 }, (_, index) => (
                <View
                  key={index}
                  style={[
                    styles.bookPage,
                    { left: 18 + index * 14 },
                  ]}
                />
              ))}
            </View>
            <View style={styles.torch}>
              <View style={styles.torchHandle} />
              <View style={styles.flame} />
            </View>
          </View>
          <Text style={styles.year}>1945</Text>
          <Text style={styles.school}>PAMPANGA</Text>
        </View>
      </View>
      <Text style={styles.brand}>SANTA RITA</Text>
      <Text style={styles.brandSecondary}>COLLEGE</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoWrap: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  badge: {
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#203B58',
    borderWidth: 8,
    borderColor: '#F0F4F8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    shadowColor: '#0F172A',
    shadowOpacity: 0.12,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  ray: {
    position: 'absolute',
    width: 10,
    height: 42,
    borderRadius: 6,
    backgroundColor: '#F4C95A',
    top: 12,
    left: '50%',
    marginLeft: -5,
  },
  innerBadge: {
    width: 196,
    height: 196,
    borderRadius: 98,
    backgroundColor: '#1A3150',
    borderWidth: 8,
    borderColor: '#F4C95A',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  motto: {
    marginTop: 18,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  emblemContainer: {
    width: 150,
    height: 110,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginTop: 4,
  },
  book: {
    width: 94,
    height: 82,
    borderRadius: 12,
    backgroundColor: '#FFF9F1',
    borderWidth: 4,
    borderColor: '#E4B94F',
    position: 'relative',
    justifyContent: 'center',
    marginRight: 18,
  },
  bookPage: {
    position: 'absolute',
    top: 14,
    width: 6,
    height: 52,
    borderRadius: 3,
    backgroundColor: '#E7B84D',
  },
  torch: {
    width: 28,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  torchHandle: {
    width: 12,
    height: 52,
    borderRadius: 6,
    backgroundColor: '#D18A2B',
    position: 'absolute',
    bottom: 4,
  },
  flame: {
    width: 28,
    height: 38,
    borderRadius: 14,
    backgroundColor: '#F4C95A',
    transform: [{ rotate: '25deg' }],
    marginBottom: 26,
  },
  year: {
    color: '#F5C95A',
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1,
    marginTop: 2,
  },
  school: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 1.5,
    marginTop: 2,
  },
  brand: {
    marginTop: 10,
    color: '#10233F',
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  brandSecondary: {
    color: '#10233F',
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: -2,
  },
});
