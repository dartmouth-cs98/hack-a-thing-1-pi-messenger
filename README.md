# Pi Messenger

This is a simple application that serves a socket on localhost, listens
for messages sent to the socket, and broadcasts the messages as an SMS
to a provided number. I used tutorials about Twilio and Socket IO.

# Original idea
Given that I have no experience with Raspberry Pi, I originally intended 
to set up a Raspberry Pi and also connect it to the socket.
Then once a message is sent to the socket the Pi would produce a sound that would stop
only after a button is pressed. The general idea was a "Are You There?" device, meaning
the Pi would start sound an alarm that would stop at the press of a button—thus the sender
knows there is someone around the Raspberry Pi.

I very quickly learned that it is actually quite tedious to work with a Raspberry
Pi in that it takes quite a few things to just get going. I underestimated how much
additional hardware I would need that was not easily found (mouse, keyboard, charger, network cable)

Nonetheless the idea is to put the current application on the Raspberry Pi.

# What I learned
Using Twilio and Socket for the first time I learned their capability as alert systems.
Moving on it would be neat to perhaps connect the buttons and speakers to the Pi that would
complete the project.
