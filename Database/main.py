# import os


# def clear_screen():
#   os.system("cls" if os.name == "nt" else "clear")


# class Player():

#   def __init__(self):
#     self.name = ""
#     self.symbol = ""

#   def choose_name(self):
#     while True:
#       name = input("Enter your name: ")
#       if name.isalpha():
#         self.name = name
#         break
#       print("Invalid Input. please enter letters only")

#   def choose_symbol(self):
#     while True:
#       symbol = input("Enter your symbol: ")
#       if symbol.isalpha() and len(symbol) == 1:
#         self.symbol = symbol
#         break

#   def run(self):
#     print('run')


# class Menu():

#   def display_main_menu(self):
#     print("Welcome to Tic Tac Toe")
#     print("1. Start game")
#     print("2. Quit game")
#     while True:
#       choice = input("Enter your choice from (1 and 2): ")
#       if choice != "1" and choice != "2":
#         print("Invalid Input. please enter 1 or 2")
#         break
#       return choice

#   def display_endgame_menu(self):
#     menu_text = """
#     Game Over
#     1. Restart Game
#     2. Quit Game
#     Enter your choice from (1 and 2): """

#     print(menu_text)
#     choice = input(menu_text)
#     return choice


# class Board():

#   def __init__(self):
#     self.board = [str(i) for i in range(9)]

#   def display_board(self):
#     for i in range(0, len(self.board), 3):
#       print("|".join(self.board[i:i + 3]))
#       if i < 6:
#         print('-' * 5)

#   def update_board(self, position, symbol):
#     if self.is_valid_move(position):
#       self.board[position - 1] = symbol
#       return True
#     return False

#   def is_valid_move(self, position):
#     return self.board[position - 1].isdigit()

#   def reset_board(self):
#     self.board = [str(i) for i in range(9)]


# class Game:

#   def __init__(self):
#     self.players = [Player(), Player()]
#     self.board = Board()
#     self.menu = Menu()
#     self.current_player_index = 0

#   def start_game(self):
#     choice = self.menu.display_main_menu()
#     if choice == "1":
#       self.setup_players()
#       self.play_game()
#     else:
#       self.quit_game()

#   def setup_players(self):
#     for number, player in enumerate(self.players, start=1):
#       print(f"Player {number}, enter Your Details: ")
#       player.choose_name()
#       player.choose_symbol()
#       print("-" * 20)
#       # clear_screen()

#   def play_game(self):
#     while True:
#       self.play_turn()
#       if self.check_win() or self.check_draw():
#         choice = self.menu.display_endgame_menu()
#         if choice == "1":
#           self.restart_game()
#         else:
#           self.quit_game()
#           break

#   def restart_game(self):
#     self.board.reset_board()
#     self.current_player_index = 0
#     self.play_game()

#   def check_win(self):
#     win_combinations = [
#         [0, 1, 2],
#         [3, 4, 5],
#         [6, 7, 8],  # rows
#         [0, 3, 6],
#         [1, 4, 7],
#         [2, 5, 8],  # columns
#         [0, 4, 8],
#         [2, 4, 6]  # diagonals
#     ]

#     for combination in win_combinations:
#       if self.board.board[combination[0]] == self.board.board[
#           combination[1]] == self.board.board[combination[2]]:
#         return True
#       return False

#   def check_draw(self):
#     return all(not cell.isdigit() for cell in self.board.board)

#   def play_turn(self):
#     player = self.players[self.current_player_index]
#     self.board.display_board()
#     print(f"{player.name}'s turn ({player.symbol})")
#     while True:
#       try:
#         cell_choice = int(input("Choose a cell (1-9): "))
#         if 1<= cell_choice >= 9 and self.board.update_board(cell_choice, player.symbol):
#           break
#         else:
#           print("Invalid Input. Please choose a valid cell")
#       except ValueError:
#         print("Invalid Input. Please enter a number between 1 and 9")

#     # self.current_player_index = (self.current_player_index + 1) % 2
#     self.switch_player()

#   def switch_player(self):
#     self.current_player_index = 1 - self.current_player_index

#   def quit_game(self):
#     print("Thanks for playing. Goodbye!")
#     exit()


# game = Game()
# game.start_game()