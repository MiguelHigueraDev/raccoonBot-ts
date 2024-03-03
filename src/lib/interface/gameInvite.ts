import { type User, type ActionRowBuilder, type ButtonBuilder, type EmbedBuilder } from 'discord.js'

// This interface is for the GameInvite components (embed)
export interface GameInvite {
  embeds: EmbedBuilder[]
  components: Array<ActionRowBuilder<ButtonBuilder>>
}

// This interface is for the InviteData that's passed to makeInvite and sendInvite
export interface InviteData {
  inviter: User
  invited: User
  timestamp: number
  game: string
}
