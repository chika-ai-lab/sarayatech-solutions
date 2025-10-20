import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Mail, Trash2, Check, X } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  company: string | null;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
}

const MessagesTab = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMessages(data || []);
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleToggleRead = async (message: Message) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ read: !message.read })
        .eq("id", message.id);

      if (error) throw error;

      toast({
        title: "Statut mis à jour",
        description: `Message marqué comme ${!message.read ? "lu" : "non lu"}.`,
      });

      fetchMessages();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Êtes-vous sûr de vouloir supprimer ce message ?")) return;

    try {
      const { error } = await supabase
        .from("contact_messages")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Message supprimé",
        description: "Le message a été supprimé avec succès.",
      });

      fetchMessages();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-8">Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Messages reçus</h2>
        <Badge variant="secondary">
          {messages.filter((m) => !m.read).length} non lus
        </Badge>
      </div>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              Aucun message reçu pour le moment
            </CardContent>
          </Card>
        ) : (
          messages.map((message) => (
            <Card
              key={message.id}
              className={message.read ? "opacity-75" : "border-primary"}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Mail
                        className={`h-4 w-4 ${!message.read ? "text-primary" : "text-muted-foreground"}`}
                      />
                      {message.subject}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-medium">{message.name}</p>
                      <p>{message.email}</p>
                      {message.company && (
                        <p className="text-xs">{message.company}</p>
                      )}
                      <p className="text-xs mt-1">
                        {new Date(message.created_at).toLocaleString("fr-FR")}
                      </p>
                    </div>
                  </div>
                  {!message.read && (
                    <Badge variant="default" className="ml-2">
                      Nouveau
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 whitespace-pre-wrap">
                  {message.message}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleToggleRead(message)}
                  >
                    {message.read ? (
                      <>
                        <X className="h-4 w-4 mr-1" />
                        Marquer non lu
                      </>
                    ) : (
                      <>
                        <Check className="h-4 w-4 mr-1" />
                        Marquer lu
                      </>
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(message.id)}
                  >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Supprimer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default MessagesTab;
