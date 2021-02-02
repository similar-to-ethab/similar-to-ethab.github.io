import re
import numpy as np
import re
#from seq2seq import encoder_model, decoder_model, num_decoder_tokens, num_encoder_tokens, input_features_dict, target_features_dict, reverse_target_features_dict, max_decoder_seq_length, max_encoder_seq_length

class ChatBot:
  
  negative_responses = ("no", "nope", "nah", "naw", "not a chance", "sorry")

  exit_commands = ("quit", "pause", "exit", "goodbye", "bye", "later", "stop")
  
  def start_chat(self):
      user_input = input("Hello!\n")
      if user_input in self.negative_responses:
        print("aight")
        return
      self.chat(user_input)
      
  def chat(self, reply):
    while not self.make_exit(reply):
      reply = input("self.generate response")


  def make_exit(self, reply):
    for exit_command in self.exit_commands:
      if exit_command in reply:
        print("Ok, have a great day!")
        return True
      
    return False

  def string_to_matrix(self, user_input):
    tokens = re.findall(r"[\w']+|[^\s\w]", user_input)
    user_input_matrix = np.zeros(
      (1, max_encoder_seq_length, num_encoder_tokens),
      dtype='float32')
      for timestep, token in enumerate(tokens):
        if token in input_features_dict:
          user_input_matrix[0, timestep, input_features_dict[token]] = 1.
      return user_input_matrix

    
bot = ChatBot()

bot.start_chat()
