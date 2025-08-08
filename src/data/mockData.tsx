export const availableRides = [
  {
    id: 1,
    name: 'Priya Sharma',
    area: 'Banjara Hills → HITEC City',
    distance: '12.5 km',
    eta: '25 min',
    price: 85,
    rating: 4.8,
    type: 'car',
    seats: 3,
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    area: 'Jubilee Hills → Gachibowli',
    distance: '15.2 km',
    eta: '18 min',
    price: 45,
    rating: 4.6,
    type: 'bike',
    seats: 1,
  },
  {
    id: 3,
    name: 'Anita Reddy',
    area: 'Madhapur → Kondapur',
    distance: '8.3 km',
    eta: '22 min',
    price: 65,
    rating: 4.9,
    type: 'car',
    seats: 2,
  },
];

export const myRides = [
  {
    id: 1,
    driver: 'Suresh Babu',
    route: 'Secunderabad → Begumpet',
    date: '2025-07-31',
    time: '09:30 AM',
    status: 'completed',
    price: 75,
    type: 'car',
  },
  {
    id: 2,
    driver: 'Lakshmi Devi',
    route: 'Ameerpet → Kukatpally',
    date: '2025-08-01',
    time: '07:45 AM',
    status: 'scheduled',
    price: 95,
    type: 'car',
  },
  {
    id: 3,
    driver: 'Venkat Rao',
    route: 'LB Nagar → Dilsukhnagar',
    date: '2025-07-30',
    time: '06:15 PM',
    status: 'cancelled',
    price: 40,
    type: 'bike',
  },
];

export const newsUpdates = [
  {
    id: 1,
    title: 'New Safety Features Added',
    content: 'Enhanced real-time tracking and emergency contact features now available for all rides.',
    time: '2 hours ago',
    image: '🚗',
  },
  {
    id: 2,
    title: 'Monsoon Special Offers',
    content: 'Get 20% off on all car pooling rides during the monsoon season. Valid till August 31st.',
    time: '1 day ago',
    image: '🌧️',
  },
  {
    id: 3,
    title: 'New Route: Airport Express',
    content: 'Direct pooling service to Rajiv Gandhi International Airport now available 24/7.',
    time: '3 days ago',
    image: '✈️',
  },
];

export const menuItems = [
  {
    icon: 'credit-card',
    title: 'Payment Methods',
    subtitle: 'Manage your payment options',
  },
  {
    icon: 'shield',
    title: 'Safety Center',
    subtitle: 'Safety tips and emergency contacts',
  },
  {
    icon: 'bell',
    title: 'Notifications',
    subtitle: 'Manage your notification preferences',
  },
  {
    icon: 'settings',
    title: 'Settings',
    subtitle: 'App preferences and account settings',
  },
  {
    icon: 'help-circle',
    title: 'Help & Support',
    subtitle: 'FAQs and customer support',
  },
  {
    icon: 'log-out',
    title: 'Logout',
    subtitle: 'Sign out of your account',
  },
];

export const defaultUserProfile = {
  name: 'John Doe',
  phone: '+91 9876543210',
  email: 'john.doe@email.com',
  rating: 4.8,
  totalRides: 156,
};