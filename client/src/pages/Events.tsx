import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const events = [
    {
      id: 1,
      day: 7,
      month: 'Prosinec',
      title: 'Veggie Vánoce',
      time: '10:00-18:00',
      description: 'Veggie Vánoce v galerii Mánes. Luční stánek bude plný dobrot a produktů.',
      facebookUrl: 'https://facebook.com/events/s/veggie-christmas-a-plant-based/1168766404955412/',
    },
    {
      id: 2,
      day: 15,
      month: 'Listopad',
      title: 'Společná procházka',
      time: 'bude upřesněno',
      description: 'Přijďte se podívat na naši Louku, poznat zvířata a dozvědět se více o našem způsobu života.',
      facebookUrl: 'https://www.facebook.com/share/17DGBXXky9/',
    },
  ];

  const registerMutation = trpc.events.register.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success('Registrace byla úspěšně odeslána!');
      setTimeout(() => {
        setSelectedEvent(null);
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    },
    onError: (error) => {
      toast.error('Chyba při odesílání registrace. Zkuste to prosím znovu.');
      console.error('Error:', error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;
    registerMutation.mutate({
      eventTitle: selectedEvent.title,
      name: formData.name,
      email: formData.email,
      message: formData.message || undefined,
    });
  };

  return (
    <div className="pt-32">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-green-900 mb-4">Události</h1>
        <p className="text-lg text-gray-700 mb-12">Zúčastněte se některé z událostí a poznejte život na Louce</p>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex gap-4 mb-4">
                <div className="bg-green-700 text-white p-4 rounded text-center min-w-20">
                  <div className="text-2xl font-bold">{event.day}</div>
                  <div className="text-sm">{event.month}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-green-900">{event.title}</h3>
                  <p className="text-gray-600 text-sm">⏰ {event.time}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex gap-2">
                <Button onClick={() => setSelectedEvent(event)} className="flex-1 bg-green-700 hover:bg-green-800">
                  Registrovat
                </Button>
                <a href={event.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center">
                  Facebook
                </a>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrace na {selectedEvent?.title}</DialogTitle>
            </DialogHeader>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Jméno a příjmení *</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Poznámka/Dotaz (nepovinné)</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" disabled={registerMutation.isPending} className="w-full bg-green-700 hover:bg-green-800">
                  {registerMutation.isPending ? 'Odesílám...' : 'Odeslat registraci'}
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <p className="text-green-700 font-semibold">✓ Registrace byla úspěšně odeslána!</p>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
