export const availableRides = [
  { id: '1', name: 'Rajesh', area: 'Madhapur', eta: '10 mins', price: '₹50', rating: 4.5 },
  { id: '2', name: 'Priya', area: 'Kondapur', eta: '8 mins', price: '₹45', rating: 4.7 },
  { id: '3', name: 'Amit', area: 'Gachibowli', eta: '15 mins', price: '₹60', rating: 4.3 },
];

export const myRides = [
  { id: '1', name: 'Rajesh', area: 'Madhapur', time: 'July 25, 2025 9:30 AM', status: 'Completed' },
  { id: '2', name: 'Amit', area: 'Hitech City', time: 'July 28, 2025 5:45 PM', status: 'Scheduled' },
];

export const newsUpdates = [
  { id: '1', title: 'New Safety Guidelines', date: 'July 25, 2025', description: 'We have updated our safety protocols to ensure better ride experiences.' },
  { id: '2', title: 'Bike Pooling Launched', date: 'July 22, 2025', description: 'Now you can opt for quicker and cheaper bike rides in select areas.' },
];

import { Settings, HelpCircle, Shield, CreditCard, LogOut } from 'lucide-react-native';

export const menuItems = [
  { label: 'Profile Settings', icon: Settings },
  { label: 'Payments', icon: CreditCard },
  { label: 'Security', icon: Shield },
  { label: 'Help & Support', icon: HelpCircle },
  { label: 'Logout', icon: LogOut },
];