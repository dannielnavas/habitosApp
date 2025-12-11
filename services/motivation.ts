const LOCAL = [
  'Gran progreso hoy!',
  'Muy bien, sigamos así!',
  'Bien hecho, sigue así!',
  'Excelente trabajo, sigamos así!',
  'Muy bien, sigamos así!',
  'Bien hecho, sigue así!',
  'Excelente trabajo, sigamos así!',
  'Muy bien, sigamos así!',
  'Bien hecho, sigue así!',
  'Excelente trabajo, sigamos así!',
]

export async function getMotivation(name?: string, habitTitle?: string) {
  const endpoint = process.env.EXPO_PUBLIC
  if(!endpoint) return LOCAL[Math.floor(Math.random() * LOCAL.length)];
  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ name, habitTitle }),
    });
    if(!res.ok) throw new Error('Failed to get motivation');
    const data = await res.json();
    const text = (data?.message ?? '').toString().trim();
    return text.slice(0, 120) || LOCAL[Math.floor(Math.random() * LOCAL.length)];
  } catch (error) {
    console.error('Failed to get motivation from endpoint', error);
    return LOCAL[Math.floor(Math.random() * LOCAL.length)];
  }
}
